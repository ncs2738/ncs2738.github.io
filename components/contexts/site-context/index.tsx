import * as React from "react";
import { createContext, FC, useState } from "react";

export enum ActivePage {
  Landing = 0,
}

export enum ActiveModal {
  None = 0,
}

interface PublicProps {
  children: JSX.Element[] | JSX.Element;
}

export const SiteContext = createContext({
  activePage: ActivePage.Landing,
  setActivePage: (newPage: ActivePage) => {
    return;
  },
  activeModal: ActiveModal.None,
  setActiveModal: (newModal: ActiveModal) => {
    return;
  },
});

export const SiteCtxManager: FC<PublicProps> = ({ children }) => {
  const [openedPage, setOpenedPage] = useState(ActivePage.Landing);
  const [openedModal, setOpenedModal] = useState(ActiveModal.None);

  return (
    <SiteContext.Provider
      value={{
        activePage: openedPage,
        setActivePage: (newPage: ActivePage) => {
          setOpenedPage(newPage);
        },
        activeModal: openedModal,
        setActiveModal: (newModal: ActiveModal) => {
          setOpenedModal(newModal);
        },
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};
