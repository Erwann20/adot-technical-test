export type ActionLinkType = {
    libelle: string;
    isPrimary: boolean;
    actionClick: () => void;
    id?: string;
}