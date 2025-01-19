export {};

declare global {
  interface Window {
    google: {
      accounts: {
        id: {
          initialize: (config: {
            client_id: string;
            callback: (response: any) => void;
            auto_select?: boolean;
            context?: string;
          }) => void;
          renderButton: (
            parent: HTMLElement | null,
            options: {
              type: string;
              theme: string;
              size: string;
              text: string;
              shape: string;
              logo_alignment: string;
            }
          ) => void;
        };
      };
    };
  }
}
