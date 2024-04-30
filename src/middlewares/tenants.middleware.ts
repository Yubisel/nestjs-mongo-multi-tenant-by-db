import {
  Injectable,
  NestMiddleware,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { TenantsService } from 'src/tenants/tenants.service';

@Injectable()
export class TenantsMiddleware implements NestMiddleware {
  constructor(private tenantService: TenantsService) {}

  async use(req: Request, res: Response, next: NextFunction) {
    // check if tenant is present in the headers of the request
    const tenantId = req.headers['x-tenant-id']?.toString();

    if (!tenantId) {
      throw new BadRequestException('Tenant id is required');
    }
    console.log('Tenant id:', tenantId);

    const tenantExists = await this.tenantService.getTenantById(tenantId);
    if (!tenantExists) throw new NotFoundException('Tenant does not exist');

    req['tenantId'] = tenantId;
    next();
  }
}
