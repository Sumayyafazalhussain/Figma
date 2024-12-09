export default function Logo() {
  return (
    <div className="bg-[#FAF3EA] py-20 px-10 flex justify-between gap-6">
      <div className="flex gap-4">
        <img src="/cup.png" width={200} height={300} alt="High Quality" className="w-10" />
        <div>
          <h5 className="font-poppins font-bold text-[24px]">High Quality</h5>
          <p className="text-[#898989]">Crafted from top materials</p>
        </div>
      </div>
      <div className="flex gap-4">
        <img src="/guarantee.png" width={200} height={300} alt="Warranty Protection" className="w-10" />
        <div>
          <h5 className="font-poppins font-bold text-[24px]">Warranty Protection</h5>
          <p className="text-[#898989]">Over 2 years</p>
        </div>
      </div>
      <div className="flex gap-4">
        <img src="/shipping.png" width={200} height={300} alt="Free Shipping" className="w-10" />
        <div>
          <h5 className="font-poppins font-bold text-[24px]">Free Shipping</h5>
          <p className="text-[#898989]">Order over 150 $</p>
        </div>
      </div>
      <div className="flex gap-4">
        <img src="/customer-support.png" width={200} height={300} alt="24/7 Support" className="w-10" />
        <div>
          <h5 className="font-poppins font-bold text-[24px]">24 / 7 Support</h5>
          <p className="text-[#898989]">Dedicated support</p>
        </div>
      </div>
    </div>
  );
}