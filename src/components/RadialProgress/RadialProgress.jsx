const RadialProgress = ({ style }) => {
  return (
    <div className={`flex items-center gap-3 p-3 rounded-2xl ${style} bg-white`}>
      {/* Radial progress */}
      <div className="relative flex items-center justify-center w-32 h-32 rounded-full bg-gray-200">
        {/* Circle Progress */}
        <div
          className="absolute inset-0 rounded-full bg-white"
          style={{
            background: `conic-gradient(#FEBF00 ${
              90 * 3.6
            }deg, transparent 0deg)`,
          }}
        ></div>

        {/* Inner Circle (for text) */}
        <div className="relative flex items-center justify-center w-28 h-28 bg-white rounded-full">
          <span className="text-2xl font-semibold text-black">50+</span>
        </div>
      </div>
      <div>Market <br /> Experiences</div>
    </div>
  );
};

export default RadialProgress;
