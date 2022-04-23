import React from 'react';
import './featureInfo.css';
import{KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';

export default function FeatureInfo() {
  return (
    <div className="Featured">
        <div className="FeatureItem">
            <span className="FeatuireTitle">Revanue</span>
            <div className="FeatureMoneyConatiner">
                <span className="FeatureMoney">$1,000</span>
                <span className="FeatureMoneyRate">-12.5<KeyboardArrowDown className="FeatureIcon negative"/></span>
            </div>
            <span className="FeatureSub">Compare to last Month</span>
        </div>

        <div className="FeatureItem">
            <span className="FeatuireTitle">Sales</span>
            <div className="FeatureMoneyConatiner">
                <span className="FeatureMoney">$2,000</span>
                <span className="FeatureMoneyRate">-25.3<KeyboardArrowDown className="FeatureIcon negative" /></span>
            </div>
            <span className="FeatureSub">Compare to last Month</span>
        </div>

        <div className="FeatureItem">
            <span className="FeatuireTitle">Cost</span>
            <div className="FeatureMoneyConatiner">
                <span className="FeatureMoney">$1,000</span>
                <span className="FeatureMoneyRate">-12.5<KeyboardArrowUp className="FeatureIcon "/></span>
            </div>
            <span className="FeatureSub">Compare to last Month</span>
        </div>


    </div>
  )
}
