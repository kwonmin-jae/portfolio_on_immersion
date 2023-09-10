function getBrowser() {
  const browsers = [
    'Chrome', 'Opera',
    'WebTV', 'Whale',
    'Beonex', 'Chimera',
    'NetPositive', 'Phoenix',
    'Firefox', 'Safari',
    'SkipStone', 'Netscape', 'Mozilla',
  ];

  const userAgent = window.navigator.userAgent.toLowerCase();

  if (userAgent.includes("edg")) {
    return "Edge";
  }

  if (userAgent.includes("whale")) {
    return "Whale";
  }

  if (userAgent.includes("trident") || userAgent.includes("msie")) {
    return "Internet Explorer";
  }

  return browsers.find((browser) => userAgent.includes(browser.toLowerCase())) || 'Other';
}

document.querySelector('.content p').innerHTML = getBrowser();
