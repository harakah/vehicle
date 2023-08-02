import React from 'react';
const { base64decode } = require('nodejs-base64');
import ReportWrapper, {
  Report,
  Loader
} from './reportSection.styles';
import { URLWEB } from 'lib/constant';
function replaceAll(string, search, replace) {
  return string.split(search).join(replace);
}

const ReportSection = ({ data }) => {
  const content = data.content;
  let filtered = content && base64decode(content);
  React.useEffect(() => {
    const g = document.getElementById('nav');
    const k = document.getElementById('printModal')
    if (g) g.remove();
    if (k) k.remove();
  }, [filtered]);
  filtered = replaceAll(
    filtered,
    '<meta content="width=device-width, initial-scale=1.0" name="viewport"/>', 
    ''
  )
  filtered = replaceAll(
    filtered,
    '="https://api.carfax.pro/wp-content/themes/apicarfaxpro/carfax/car-fax-files/css/',
    `="${URLWEB}carfax/css/vhr/`
  );
  filtered = replaceAll(
    filtered,
    '="https://api.carfax.pro/wp-content/themes/apicarfaxpro/carfax/car-fax-files/js/',
    `="${URLWEB}carfax/js/vhr/`
  );
  filtered = replaceAll(
    filtered,
    'src="https://api.carfax.pro/wp-content/themes/apicarfaxpro/carfax/car-fax-files/img/', 
    `src="${URLWEB}carfax/img/vhr/`
  );
  filtered = replaceAll(
    filtered,
    'icon-Down-med', 
    'icon-down-med'
  );
  filtered = replaceAll(
    filtered,
    'icon-Up-med', 
    'icon-up-med'
  );

  return (
    <ReportWrapper>
      <Report dangerouslySetInnerHTML={{ __html: filtered }} />
    </ReportWrapper>
  );
};

export default ReportSection;
