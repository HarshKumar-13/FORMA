import { create } from 'zustand';

type AuthStep = 'phone' | 'otp' | 'details';
type AuthMode = 'signup' | 'login';

interface UserState {
  isAuthModalOpen: boolean;
  authMode: AuthMode;
  authStep: AuthStep;
  isLoggedIn: boolean;
  phoneNumber: string;
  openAuthModal: (mode: AuthMode) => void;
  closeAuthModal: () => void;
  setAuthStep: (step: AuthStep) => void;
  setPhoneNumber: (num: string) => void;
  login: () => void;
  logout: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  isAuthModalOpen: false,
  authMode: 'signup',
  authStep: 'phone',
  isLoggedIn: false,
  phoneNumber: '',
  openAuthModal: (mode) => set({ isAuthModalOpen: true, authMode: mode, authStep: 'phone' }),
  closeAuthModal: () => set({ isAuthModalOpen: false }),
  setAuthStep: (step) => set({ authStep: step }),
  setPhoneNumber: (num) => set({ phoneNumber: num }),
  login: () => set({ isLoggedIn: true, isAuthModalOpen: false }),
  logout: () => set({ isLoggedIn: false }),
}));