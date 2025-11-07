import { Icon } from "@iconify/react";

const TabItem = ({
  thisTabName,
  tabIcon,
  activeTab,
  setActiveTab,
  children,
}) => {
  return (
    <button
      onClick={() => setActiveTab(thisTabName)}
      className={`flex-grow flex justify-center items-center px-3 pt-2.5 pb-2 text-sm font-semibold md:text-lg md:-mb-0 ${
        activeTab === thisTabName
          ? "border-b-4 border-violet-500 text-violet-600"
          : "text-gray-500"
      }`}
    >
      <Icon
        icon={tabIcon ? tabIcon : "material-symbols:event-list-outline"}
        className="me-2 text-2xl"
      />
      {children}
    </button>
  );
};

export default function TabBar({
  tabList,
  activeTab,
  setActiveTab,
  className = "",
}) {
  return (
    <div
      className={`border-2 border-gray-300 flex items-center gap-6 px-2 bg-white rounded-xl ${className}`}
    >
      {tabList.map((tabItem, i) => (
        <TabItem
          key={i}
          thisTabName={tabItem.tabName}
          tabIcon={tabItem.tabIcon}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        >
          {tabItem.tabName}
        </TabItem>
      ))}
    </div>
  );
}
