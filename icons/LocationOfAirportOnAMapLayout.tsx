export function LocationOfAirportOnAMapLayout({
  size = 24,
}: {
  size?: number;
}): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      version="1.1"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g fill="#000" fill-rule="evenodd">
        <path d="M12,1.75c-3.93134,0 -7.25,3.56934 -7.25,8.14362c0,1.04868 0.43518,2.35348 1.16703,3.77718c0.72339,1.4072 1.6964,2.8545 2.68264,4.1675c0.9843,1.3104 1.97043,2.472 2.71123,3.3067c0.2655,0.2991 0.499,0.5557 0.6891,0.7615c0.1901,-0.2058 0.4236,-0.4624 0.6891,-0.7615c0.7408,-0.8347 1.7269,-1.9963 2.7112,-3.3067c0.9863,-1.313 1.9593,-2.7603 2.6827,-4.1675c0.7318,-1.4237 1.167,-2.7285 1.167,-3.77718c0,-4.57428 -3.3187,-8.14362 -7.25,-8.14362Zm0,21.25c-0.5367,0.5239 -0.5368,0.5238 -0.5369,0.5237l-0.0018,-0.0019l-0.005,-0.0051l-0.0184,-0.019c-0.016,-0.0166 -0.0394,-0.0408 -0.0696,-0.0723c-0.0604,-0.0631 -0.1482,-0.1556 -0.2596,-0.2745c-0.2227,-0.2379 -0.5397,-0.5821 -0.9196,-1.0102c-0.75915,-0.8553 -1.77307,-2.0493 -2.78877,-3.4015c-1.01376,-1.3496 -2.04075,-2.8719 -2.81736,-4.3826c-0.76815,-1.4943 -1.33297,-3.0558 -1.33297,-4.46298c0,-5.24935 3.84478,-9.64362 8.75,-9.64362c4.9052,0 8.75,4.39427 8.75,9.64362c0,1.40718 -0.5648,2.96868 -1.333,4.46298c-0.7766,1.5107 -1.8036,3.033 -2.8173,4.3826c-1.0157,1.3522 -2.0296,2.5462 -2.7888,3.4015c-0.3799,0.4281 -0.6969,0.7723 -0.9196,1.0102c-0.1114,0.1189 -0.1992,0.2114 -0.2596,0.2745c-0.0302,0.0315 -0.0536,0.0557 -0.0696,0.0723l-0.0184,0.019l-0.0064,0.0065c-0.0001,0.0002 -0.0006,0.0007 -0.5373,-0.5232Zm0,0l0.5373,0.5232c-0.1411,0.1446 -0.3353,0.2268 -0.5373,0.2268c-0.202,0 -0.3958,-0.0818 -0.5369,-0.2263l0.5369,-0.5237Z"></path>
        <path d="M12,4.25c-0.2761,0 -0.5,0.22386 -0.5,0.5v2.75c0,0.29352 -0.1712,0.56007 -0.4382,0.68211l-3.3118,1.51397v0.52812l3.1094,-0.87475c0.226,-0.06358 0.4688,-0.01764 0.656,0.12414c0.1871,0.14178 0.2971,0.36303 0.2971,0.59781v3.1429c0,0.2616 -0.1363,0.5043 -0.3597,0.6404l-0.5606,0.3417l0.8892,-0.271c0.1425,-0.0434 0.2947,-0.0434 0.4372,0l1.257,0.3831l-0.6684,-0.4889c-0.1931,-0.1412 -0.3072,-0.3661 -0.3072,-0.6053v-3.1429c0,-0.23763 0.1126,-0.46122 0.3036,-0.60267c0.191,-0.14144 0.4377,-0.18401 0.665,-0.11472l2.7814,0.84769v-0.50562l-3.3118,-1.51397c-0.267,-0.12204 -0.4382,-0.38859 -0.4382,-0.68211v-2.75c0,-0.27614 -0.2239,-0.5 -0.5,-0.5Zm-2,0.5c0,-1.10457 0.8954,-2 2,-2c1.1046,0 2,0.89543 2,2v2.26821l3.3118,1.51397c0.267,0.12204 0.4382,0.38858 0.4382,0.68211v2.00001c0,0.2376 -0.1126,0.4612 -0.3036,0.6027c-0.191,0.1414 -0.4377,0.184 -0.665,0.1147l-2.7814,-0.8476v1.7495l1.2553,0.9182c0.1931,0.1412 0.3072,0.3661 0.3072,0.6053v1.1429c0,0.2377 -0.1126,0.4612 -0.3036,0.6027c-0.191,0.1414 -0.4377,0.184 -0.665,0.1147l-2.5939,-0.7905l-2.59386,0.7905c-0.22733,0.0693 -0.47405,0.0267 -0.66502,-0.1147c-0.19098,-0.1415 -0.30362,-0.365 -0.30362,-0.6027v-1.1429c0,-0.2615 0.13629,-0.5042 0.35965,-0.6404l1.51535,-0.9236v-1.7316l-3.10939,0.8748c-0.22604,0.0635 -0.4688,0.0176 -0.65597,-0.1242c-0.18717,-0.1418 -0.29714,-0.363 -0.29714,-0.5978v-2.00001c0,-0.29353 0.17123,-0.56007 0.43818,-0.68211l3.31182,-1.51397v-2.26821Z"></path>
      </g>
    </svg>
  );
}
