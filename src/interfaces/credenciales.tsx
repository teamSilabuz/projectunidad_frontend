export interface CredencialExterna {
    id: number;
    url: string;
    name: string;
    username_ext: string;
    createdAt: string;
}
  
export interface Message {
    id: number;
    user_id: number;
    createdAt: string;
    updated_at: string;
    credencial_Externa: CredencialExterna[];
}
  
export interface Response {
    ok: boolean;
    message: Message;
}

export interface Props {
    credencial: CredencialExterna;
}