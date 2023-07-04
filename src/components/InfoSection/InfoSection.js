import React from 'react';
import { InfoSec, InfoRow, InfoColumn, TextWrapper, TopLine, Heading, Subtitle, ImgWrapper, Img } from './InfoSection.elements';
import { Container, Button } from '../../globalStyles';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { EmailShareButton, EmailIcon } from 'react-share';
import { useMemo,useEffect } from 'react';
import { useMyHook } from '../myHook';

const InfoSection = ({
  primary,
  lightBg,
  topLine,
  lightTopLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
  start,
  link,
  linkText,
}) => {
  /**listen to localtsorage */
  const { id, saveId } = useMyHook(null);
  useEffect(() => {
    //console.log('Component B - ID changed:', id);
  }, [id]);

  const location = useLocation();
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
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{t(topLine)}</TopLine>
                <Heading lightText={lightText}>{t(headline)}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{t(description)}
                <a style={{'color': 'white'}} href={link}>{t(linkText)}</a></Subtitle>
                <Link to='/sign-up'>
                {!(location.pathname === '/sign-up') ?
                  <Button big fontBig primary={primary}>
                    {t(buttonLabel)}
                  </Button>
                  :

                  <EmailShareButton
        subject="Intersted in the business"
        body="hello"
        to="admin@eatifydash.com"
      >
        <EmailIcon size={32} round={true} />
      </EmailShareButton>
      
      }
                </Link>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default InfoSection;
