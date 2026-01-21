const Header = () => {
  return (
    <div className="h-16 bg-white border-b flex items-center justify-between px-6">
      <h2 className="font-semibold">Admin Dashboard</h2>
      <div className="flex items-center gap-3">
        <span className="text-sm text-gray-600">Admin</span>
        <div className="w-8 h-8 rounded-full bg-gray-300"></div>
      </div>
    </div>
  );
};

export default Header;
