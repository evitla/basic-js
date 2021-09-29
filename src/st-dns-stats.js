/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  const transformedDomains = domains.map((domain) => {
    let tmp = '';
    return domain.split('.').reverse().map((d) => {
      tmp += `.${d}`;
      return tmp;
    });
  });

  return transformedDomains.flat().reduce((obj, domain) => (
    { ...obj, [domain]: (obj[domain] || 0) + 1 }
  ), {});
}
