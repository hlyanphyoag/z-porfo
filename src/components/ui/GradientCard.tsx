// GradientBorderCard.tsx
export default function GradientBorderCard() {
  return (
    <div
      className="
          w-[397px] h-[201px] rounded-[24px] p-[1.5px] /* the border thickness */
          [background:linear-gradient(305.8deg,rgba(125,122,251,0)_56.27%,#FFD49C_90.38%)]
        "
    >
      {/* inner card with actual background & padding */}
      <div
        className="
          h-full rounded-[22.5px] /* 24 - 1.5 */
          bg-[#0f0f11]           /* any solid bg you like */
          pt-[32px] pr-[24px] pb-[32px] pl-[24px]
          flex flex-col gap-[10px]
        "
      >
        <div className="flex items-start space-x-4 mb-4">
          <div className="w-12 h-12 rounded-full bg-gray-600"></div>
          <div className="flex-1">
            <h4 className="font-semibold text-lg">Client Name</h4>
            <p className="text-gray-400 text-sm">Product designer</p>
          </div>
          <div className="text-4xl text-gray-500 font-serif">
            <img src="semi.svg" alt="" />
          </div>
        </div>

        <p className="text-neutral-300 text-sm leading-snug">
          Product designer. s simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the…
        </p>
      </div>
    </div>
  );
}
