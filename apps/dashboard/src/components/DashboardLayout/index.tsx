import { PropsWithChildren } from 'react';
import {
  Divider,
  Drawer,
  Logo,
  Menu,
  MenuItem,
  TextField,
  Typography,
} from '@repo/ui/components';
import {
  Building,
  Layers,
  LayoutAlt,
  Message,
  PieChart,
  Star,
  User,
  UserPlus,
} from '@repo/ui/icons';

const DashboardLayout = ({ children }: PropsWithChildren) => {
  return (
    <div className="bg-greyscale-25 flex h-screen">
      <Drawer className="bg-base-background">
        <div className="mb-4 flex w-[16.25rem] items-center justify-between px-5">
          <Logo variant="color" size="small" />
          <LayoutAlt className="text-base-textParagraph" />
        </div>
        <div className="mb-4 px-5">
          <TextField name="search" placeholder="Search" />
        </div>
        <div className="mb-4">
          <Typography
            variant="md"
            className="text-base-textParagraph mb-4 px-5 font-medium"
          >
            General
          </Typography>
          <Menu>
            <MenuItem
              selected={true}
              leftSection={<PieChart className="text-base-defaultBackground" />}
            >
              Overview
            </MenuItem>
            <MenuItem
              leftSection={<User className="text-base-defaultBackground" />}
            >
              Member Settings
            </MenuItem>
            <MenuItem
              leftSection={<Star className="text-base-defaultBackground" />}
            >
              Favorites
            </MenuItem>
            <MenuItem
              leftSection={<Message className="text-base-defaultBackground" />}
            >
              Messages
            </MenuItem>
          </Menu>
        </div>
        <Divider className="before:border-greyscale-100 after:border-greyscale-100 mb-4 px-5" />
        <div className="mb-4">
          <Typography
            variant="md"
            className="text-base-textParagraph mb-4 px-5 font-medium"
          >
            Spaces
          </Typography>
          <Menu>
            <MenuItem
              leftSection={<UserPlus className="text-base-defaultBackground" />}
            >
              Human Resources
            </MenuItem>
            <MenuItem
              leftSection={<Building className="text-base-defaultBackground" />}
            >
              Agency Branding
            </MenuItem>
            <MenuItem
              leftSection={<Layers className="text-base-defaultBackground" />}
            >
              Development Stuff
            </MenuItem>
          </Menu>
        </div>
      </Drawer>
      <>{children}</>
    </div>
  );
};

export default DashboardLayout;
