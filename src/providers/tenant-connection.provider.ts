import { InternalServerErrorException } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { getConnectionToken } from '@nestjs/mongoose';
import { Connection } from 'mongoose';

export const tenantConnectionProvider = {
  provide: 'TENANT_CONNECTION',
  useFactory: async (request, conection: Connection) => {
    if (!request.tenantId) {
      throw new InternalServerErrorException(
        'Make sure to use the TenantsMiddleware before using the tenant connection provider.',
      );
    }
    return conection.useDb(`nmmt_${request.tenantId}`);
  },
  inject: [REQUEST, getConnectionToken()],
  // scope: Scope.REQUEST,
};
