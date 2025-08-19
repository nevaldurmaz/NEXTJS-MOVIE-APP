import Link from "next/link";



const MenuItem = ({ menu }) => {
  return (
    <div>
      <Link href={menu.url}>{menu.name} </Link>
    </div>
  );
};

export default MenuItem;
