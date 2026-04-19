import { Controller, Get, Redirect } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Redirect(process.env.WEB_URL || 'http://localhost:3000', 302)
  root() {
    return;
  }

  @Get('login')
  @Redirect(`${process.env.WEB_URL || 'http://localhost:3000'}/login`, 302)
  login() {
    return;
  }

  @Get('agendar')
  @Redirect(`${process.env.WEB_URL || 'http://localhost:3000'}/agendar`, 302)
  agendar() {
    return;
  }
}
