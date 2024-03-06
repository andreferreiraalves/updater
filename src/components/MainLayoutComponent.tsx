import BottomComponent from "./BottomComponent";
import NavComponent from "./NavComponent";

interface MainLayoutComponentProps {
  title: string;
  children: any;
}

function MainLayoutComponent({ children, title }: MainLayoutComponentProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <NavComponent />
      <div className="m-4">
        <h2 className="text-5xl mt-14">{title}</h2>
      </div>
      <div className="flex-1">{children}</div>
      <BottomComponent />
    </div>
  );
}

export default MainLayoutComponent;
