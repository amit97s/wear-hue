import {
    Code,
    Filter,
    Heart,
    Home,
    HomeIcon,
    Images,
    Mail,
    MapPin,
    PlaneIcon,
    PlaneTakeoff,
    Star,
    Users,
    Globe2Icon,
    User,
    LogInIcon,
    Table,
    Package,
  } from "lucide-react"
import { BiCustomize } from "react-icons/bi";
import { CgProductHunt } from "react-icons/cg";
import { FcCloth } from "react-icons/fc";
import { GrOrderedList } from "react-icons/gr";

  export const roleBasedNav = {
    admin: {
      navMain: [
        { title: "Dashboard", url: "/dashboard/admin", icon: Home },
        { title: "Profile", url: "/dashboard/admin/profile", icon: User },
        { title: "Users", icon: Users, },
        {
          title: "Products",
          icon: Package,
        },
          {
            title: "Orders",
            icon: GrOrderedList,
          },
      ],
    },
    user :{ 
      navMain: [
        { title: "Dashboard", url: "/dashboard/user", icon: Home },
        { title: "Profile", url: "/dashboard/user/profile", icon: User },
        { title: "Orders", url: "/dashboard/user/orders", icon: GrOrderedList },
      ],
    }
    
  };
  