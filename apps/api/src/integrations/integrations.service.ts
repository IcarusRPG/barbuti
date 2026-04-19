import { Injectable } from '@nestjs/common';

@Injectable()
export class IntegrationsService {
  providers() {
    return [
      { name: 'google-calendar', configured: Boolean(process.env.GOOGLE_CLIENT_ID) },
      { name: 'microsoft-graph', configured: Boolean(process.env.MS_CLIENT_ID) },
      { name: 'cloudinary', configured: Boolean(process.env.CLOUDINARY_CLOUD_NAME) },
      { name: 'n8n', configured: Boolean(process.env.N8N_BASE_URL) }
    ];
  }
}
