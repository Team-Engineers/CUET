import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";

import VerticalNavItems from "../Navigation";
import VerticalLayout from "../layouts/VerticalLayout";
import VerticalAppBarContent from "../layouts/components/vertical/appBar";

const UserLayout = ({ children }) => {
  /**
   *  The below variable will hide the current layout menu at given screen size.
   *  The menu will be accessible from the Hamburger icon only (Vertical Overlay Menu).
   *  You can change the screen size from which you want to hide the current layout menu.
   *  Please refer useMediaQuery() hook: https://mui.com/components/use-media-query/,
   *  to know more about what values can be passed to this hook.
   *  ! Do not change this value unless you know what you are doing. It can break the template.
   */
  const hidden = useMediaQuery((theme) => theme.breakpoints.down("lg"));

  const UpgradeToProImg = () => {
    return (
      <Box sx={{ mx: "auto" }}>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://themeselection.com/products/materio-mui-react-nextjs-admin-template/"
        ></a>
      </Box>
    );
  };

  return (
    <VerticalLayout
      hidden={hidden}
      verticalNavItems={VerticalNavItems()}
      afterVerticalNavMenuContent={UpgradeToProImg}
      verticalAppBarContent={(props) => (
        <VerticalAppBarContent
          hidden={hidden}
          toggleNavVisibility={props.toggleNavVisibility}
        />
      )}
    >
      {children}
    </VerticalLayout>
  );
};

export default UserLayout;
