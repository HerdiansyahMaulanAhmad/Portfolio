const Footer = () => {
  return (
    <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
        <h1 className="text-2xl font-bold">Portofolio</h1> 
        <div className="flex gap-7">
            <a href="#beranda">Beranda</a>
            <a href="#tentang">Tentang</a>
            <a href="#proyek">Proyek</a>
        </div>
        <div className="flex items-center gap-3">
            <a href="https://github.com/HerdiansyahMaulanAhmad">
                <i className="ri-github-fill ri-2x"></i>
            </a>
            <a href="https://www.instagram.com/hrdiansyhma_?igsh=aHl3Y3R0ZGg2dnZx&utm_source=qr">
                <i className="ri-instagram-fill ri-2x"></i>
            </a>
            <a href="https://www.linkedin.com/in/herdiansyah-maulan-ahmad-810153372">
                <i className="ri-linkedin-fill ri-2x"></i>
            </a>
            <a href="https://www.tiktok.com/@xxynzyy_?_t=ZS-8xsb2K1qglN&_r=1">
                <i className="ri-tiktok-fill ri-2x"></i>
            </a>
        </div>
    </div>
  );
};

export default Footer