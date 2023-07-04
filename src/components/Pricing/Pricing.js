import React from 'react';
import { Button } from '../../globalStyles';
import { AiFillThunderbolt } from 'react-icons/ai';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
import { GiFloatingCrystal } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature
} from './Pricing.elements';
import { useMyHook } from '../myHook';
import { useMemo,useEffect } from 'react';

const Pricing = () => {
    /**listen to localtsorage */
    const { id, saveId } = useMyHook(null);
    useEffect(() => {
      //console.log('Component B - ID changed:', id);
    }, [id]);
    const t = useMemo(() => {
      const trans = JSON.parse(sessionStorage.getItem("translations"))
      const translationsMode = sessionStorage.getItem("translationsMode")
      return (text) => {
        if (trans != null) {
          if (translationsMode != null) {
            if (trans[text] != null) {
              if (trans[text][translationsMode] != null) {
                return trans[text][translationsMode]
              }
            }
          }
        }
  
        return text
      }
    }, [sessionStorage.getItem("translations"), sessionStorage.getItem("translationsMode")])
    
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>{t('Our Services')}</PricingHeading>
          <PricingContainer>

            <PricingCard to='/sign-up'>
              <PricingCardInfo style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                <PricingCardIcon>
                </PricingCardIcon>
                <PricingCardPlan>{t('Tier 1')}</PricingCardPlan>
                <PricingCardCost>$40</PricingCardCost>
                <PricingCardLength>{t('Cancel and refund anytime')}</PricingCardLength>
                <PricingCardFeatures>
                <PricingCardFeature>{t('We offer:')}</PricingCardFeature>
                  <PricingCardFeature>{t('QR code menu ordering')}</PricingCardFeature>
                  <PricingCardFeature>{t('Geolocation plugin')}</PricingCardFeature>
                  <PricingCardFeature>{t('Therminal printer')}</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary style={{ marginTop: 'auto', marginBottom: '0px' }}>{t('Choose Plan')}</Button>
              </PricingCardInfo>
            </PricingCard>

            <PricingCard to='/sign-up'>
              <PricingCardInfo style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                <PricingCardIcon>
                </PricingCardIcon>
                <PricingCardPlan>{t('Tier 2')}</PricingCardPlan>
                <PricingCardCost>$0</PricingCardCost>
                <PricingCardLength>{t('Cancel anytime')}</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>{t('Include everything on Tier1')}</PricingCardFeature>
                  <PricingCardFeature>{t('A special rate of 3.9% + $0.50 per transaction for online orders')}</PricingCardFeature>
                  <PricingCardFeature>{t('We support Apple Pay, Google Pay,')}</PricingCardFeature>
                  <PricingCardFeature>{t('Visa, Amex and Master card')}</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary style={{ marginTop: 'auto', marginBottom: '0px' }}>{t('Choose Plan')}</Button>
              </PricingCardInfo>
            </PricingCard>

            <PricingCard to='/sign-up'>
              <PricingCardInfo style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                <PricingCardIcon>
                </PricingCardIcon>
                <PricingCardPlan>{t('Tier 3')}</PricingCardPlan>
                <PricingCardCost>$0</PricingCardCost>
                <PricingCardLength>{t('Cancel anytime')}</PricingCardLength>
                <PricingCardFeatures>
                <PricingCardFeature>{t('Include everything on Tier2')}</PricingCardFeature>

                <PricingCardFeature>{t('A special rate of 8.9% + $0.50 per transaction for deliver orders')}</PricingCardFeature>
                <PricingCardFeature>{t('Location limited')}</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary style={{ marginTop: 'auto', marginBottom: '0px' }}>{t('Choose Plan')}</Button>
              </PricingCardInfo>
            </PricingCard>

            
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}

export default Pricing