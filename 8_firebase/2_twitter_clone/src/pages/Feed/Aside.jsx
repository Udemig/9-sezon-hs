import React from 'react';

const Aside = () => {
  return <div className="max-xl:hidden">Aside</div>;
};

// feed/index dosyasındaki user state'inin değişmesi bu bileşenin render olmasını sebep oluyordu bu bileşende user'ı kullanmıyacağımızdan dolayı gereksiz yere tekrar render olmasını istemedik. Bu sorunu çözmek için bileşenin aldığı proplar değişmedikçe render olmasını engelleyen React.memo methodunu kullandık
export default React.memo(Aside);
