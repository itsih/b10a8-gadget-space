const Footer = () => {
  return (
    <footer className="footer bg-base-200 text-base-content p-10 flex flex-col">
      <div className="border-b-2 w-full flex flex-col items-center py-4">
        <h1 className="text-3xl font-bold text-black">Gadget Space</h1>
        <p className="text-base font-semibold text-gray-600">
          Leading the way in cutting-edge technology and innovation.
        </p>
        
      </div>
      <div className="footer flex justify-around">
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Product Support</a>
          <a className="link link-hover">Order Tracking</a>
          <a className="link link-hover">Shipping & Delivery</a>
          <a className="link link-hover">Returns</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Careers</a>
        </nav>
        <nav>
          <h6 className="footer-title text-black">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
