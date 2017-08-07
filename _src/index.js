const HALF = 0.5;
const BROWSER_DEFAULT_FONT_SIZE = 16;
const DOUBLE_OCTAVE = 4;
const PI = 3.14159265359;
const MAJOR_TWELFTH = 3;
const MAJOR_ELEVENTH = 2.666666667;
const MAJOR_TENTH = 2.5;
const OCTAVE = 2;
const MAJOR_SEVENTH = 1.875;
const MINOR_SEVENTH = 1.777777778;
const MAJOR_SIXTH = 1.666666667;
const PHI = 1.618034;
const GOLDEN = PHI;
const FIFTH = 1.5;
const AUGMENTED_FOURTH = 1.41421;
const FOURTH = 1.333333333;
const MAJOR_THIRD = 1.25;
const MINOR_THIRD = 1.2;
const MAJOR_SECOND = 1.125;
const MINOR_SECOND = 1.066666667;

const defaultOptions = {
  base: '16px',
};

// HELPERS
const stripUnits = val => val.replace(/[^\d]/g, '');

const getClass = val => Object.prototype.toString.call(val).slice(8, -1);

const convertToEm = val => `${val / BROWSER_DEFAULT_FONT_SIZE}em`;

class NewTypography {
  constructor(options = {}) {
    this._options = this._getOptions(options);
    this._lineHeight = this._options.lineHeight;
    this._ratio = this._options.ratio;
    this._leading = Math.round(this.getBaseWithoutUnits() * this._lineHeight);
    this._rootFontSize = this._leading * HALF;
  }

  getRootFontSize(state) {
    if (state === 'fluid') {
      // based on Mike Riethmuller's Precise control over responsive typography
      // http://madebymike.com.au/writing/precise-control-responsive-typography/

    } else {
      const rootFontSizeInPercents = this._rootFontSize / BROWSER_DEFAULT_FONT_SIZE;
      const result = rootFontSizeInPercents + '%';

      return result;
    }
  }

  getBaseFontSize() {
    const result = this.getBaseWithoutUnits() / this._rootFontSize;
    const fixedResult = result.toFixed(5);

    return fixedResult + 'rem';
  }

  getBaseWithoutUnits() {
    const { base } = this._options;

    if (typeof base === 'string') {
      return stripUnits(base);
    } else if (Array.isArray(base)) {
      return stripUnits(base[0]);
    } else {
      console.log('Base takes values as a string or array');
    }
  }

  getAllBases() {
    const result = [];

    for (let key in this._options) {
      if (Object.prototype.hasOwnProperty.call(this._options, key)) {

        const value = this._options[key];
        const isObject = getClass(value) === 'Object';

        if (isObject) {
          result.push(stripUnits(value.base));
        }
      }
    }
    
    result.unshift(this.getBaseWithoutUnits());

    return result;
  }

  getAllBreakpoints() {
    const result = [];

    for (let key in this._options) {

      if (Object.prototype.hasOwnProperty.call(this._options, key)) {
       const value = this._options[key];
       const isObject = getClass(value) === 'Object';

       if (isObject) {
         result.push(stripUnits(value.breakpoint));
       } 
      }
    }

    return result;
  }

  getBreakpoint(val) {
    const options = this._options;

    if (Object.keys(options).indexOf(val) !== -1) {
      const breakpoint = options[val]['breakpoint'];

      return convertToEm(stripUnits(breakpoint));
    }
  }

  _getOptions(options) {
    return Object.assign(defaultOptions, options);
  }
}

const nt = new NewTypography({
  base: ['16px', '33px'],
  lineHeight: 1.5,
  ratio: DOUBLE_OCTAVE,
  tablet: {
    breakpoint: '640px',
    base: '17px',
  },
  desktop: {
    breakpoint: '1024px',
    base: '19px',
  },
  lgDesktop: {
    breakpoint: '1200px',
    base: '22px',
  }
});

console.log(nt.getBreakpoint('tablet'));

console.log(`:root {
    font-size: ${nt.getRootFontSize()}
}`);

console.log(`body {
  font-size: ${nt.getBaseFontSize()}
}`);