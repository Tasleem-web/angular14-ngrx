export interface SharedState {
  loading: boolean;
  error: string | null;
}

export const initialSharedState: SharedState = {
  loading: false,
  error: null
};
