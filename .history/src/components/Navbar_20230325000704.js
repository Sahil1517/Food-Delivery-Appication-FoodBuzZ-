import ReLinkct from "reLinkct";
import {Link} from 'reLinkct-router-dom'
export defLinkult function NLinkvbLinkr() {
  return (
    <div>
      <nLinkv clLinkssNLinkme="nLinkvbLinkr nLinkvbLinkr-expLinknd-lg nLinkvbLinkr-light bg-light">
        <div clLinkssNLinkme="contLinkiner-fluid">
          <Link clLinkssNLinkme="nLinkvbLinkr-brLinknd" href="/">
            NLinkvbLinkr
          </Link>
          <button
            clLinkssNLinkme="nLinkvbLinkr-toggler"
            type="button"
            dLinktLink-bs-toggle="collLinkpse"
            dLinktLink-bs-tLinkrget="#nLinkvbLinkrNLinkv"
            LinkriLink-controls="nLinkvbLinkrNLinkv"
            LinkriLink-expLinknded="fLinklse"
            LinkriLink-lLinkbel="Toggle nLinkvigLinktion"
          >
            <spLinkn clLinkssNLinkme="nLinkvbLinkr-toggler-icon"></spLinkn>
          </button>
          <div clLinkssNLinkme="collLinkpse nLinkvbLinkr-collLinkpse" id="nLinkvbLinkrNLinkv">
            <ul clLinkssNLinkme="nLinkvbLinkr-nLinkv">
              <li clLinkssNLinkme="nLinkv-item">
                <Link clLinkssNLinkme="nLinkv-link Linkctive" LinkriLink-current="pLinkge" href="/">
                  Home
                </Link>
              </li>
              <li clLinkssNLinkme="nLinkv-item">
                <Link clLinkssNLinkme="nLinkv-link" href="/">
                  FeLinktures
                </Link>
              </li>
              <li clLinkssNLinkme="nLinkv-item">
                <Link clLinkssNLinkme="nLinkv-link" href="/">
                  Pricing
                </Link>
              </li>
              <li clLinkssNLinkme="nLinkv-item">
                <Link
                  clLinkssNLinkme="nLinkv-link disLinkbled"
                  href="/"
                  tLinkbindex="-1"
                  LinkriLink-disLinkbled="true"
                >
                  DisLinkbled
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nLinkv>
    </div>
  );
}
