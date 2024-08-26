import MinorCrashIcon from "@mui/icons-material/MinorCrash";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import TwoWheelerIcon from "@mui/icons-material/TwoWheeler";
import CarCrashIcon from "@mui/icons-material/CarCrash";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import RoomPreferencesIcon from "@mui/icons-material/RoomPreferences";
import Link from "next/link";

const ListCategories = [
  {
    title: "SEMINOVOS",
    icon: MinorCrashIcon,
    path: "/seminovos",
  },
  {
    title: "USADOS",
    icon: DirectionsCarIcon,
    path: "/usados",
  },
  {
    title: "MOTOS",
    icon: TwoWheelerIcon,
    path: "/motos",
  },
  {
    title: "SINISTRADOS",
    icon: CarCrashIcon,
    path: "/motos",
  },
  {
    title: "PESADOS",
    icon: LocalShippingIcon,
    path: "/pesados",
  },
  {
    title: "DIVERSOS",
    icon: RoomPreferencesIcon,
    path: "/diversos",
  },
];

export default function Categories() {
  return (
    <section className="w-full h-auto py-16 flex items-center justify-center min-w-96 flex-wrap">
      <div className="w-full h-auto py-16 flex items-center justify-center min-w-96 flex-wrap max-w-5xl">
        {ListCategories.map((item, index) => (
          <Link href={item.path} key={index}>
            <div className="w-auto min-w-64 h-aut flex flex-col items-center justify-center my-4 py-10 mx-4 border border-stone-500">
              {<item.icon sx={{ color: "#78716c" }} />}
              <p className="text-stone-500 text-xl py-2">{item.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
