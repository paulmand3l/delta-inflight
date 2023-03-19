import { atom } from 'recoil';


export const routeAtom = atom<string>({
  key: 'nav.routeVisible',
  default: 'Top Picks',
});

export const linkTappedAtom = atom<string>({
  key: 'nav.linkTapped',
  default: 'Top Picks',
});

export const showMoreAtom = atom<boolean>({
  key: 'nav.showMore',
  default: false,
});

export const viewModesAtom = atom<{ [title: string]: 'column' | 'grid' }>({
  key: 'media.viewModes',
  default: {},
});
