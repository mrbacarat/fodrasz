export type NotificationPayload = {
  to: string;
  subject: string;
  html: string;
};

export type SmsPayload = {
  to: string;
  message: string;
};

export interface EmailProvider {
  send(payload: NotificationPayload): Promise<void>;
}

export interface SmsProvider {
  send(payload: SmsPayload): Promise<void>;
}

export class ConsoleEmailProvider implements EmailProvider {
  async send(payload: NotificationPayload) {
    console.info("[Email]", payload.subject, payload.to);
  }
}

export class ConsoleSmsProvider implements SmsProvider {
  async send(payload: SmsPayload) {
    console.info("[SMS]", payload.to, payload.message);
  }
}
