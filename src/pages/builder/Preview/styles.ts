import { Font, StyleSheet } from '@react-pdf/renderer';

export const styles = StyleSheet.create({
  iframe: {
    width: 500,
    height: 600,
  },
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 55,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    fontFamily: 'Sora',
  },
  profession: {
    fontSize: 15,
    textAlign: 'center',
    marginBottom: 40,
  },
  mainInfo: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: '30px',
  },
  mainInfoHeading: {
    fontFamily: 'Sora',
    letterSpacing: '5px',
    fontSize: '20px',
    fontWeight: 100,
  },
  profile: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    gap: 10,
    fontSize: 15,
  },
  education: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    gap: 10,
    fontSize: 15,
  },
  experience: {
    display: 'flex',
    alignItems: 'flex-start',
    marginTop: '50px',
    width: '80%',
  },
  experienceBlock: {
    display: 'flex',
    flexDirection: 'row',
    gap: '20px',
    marginTop: '10px',
  },
  experienceDetails: {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
  },
  experienceRole: {
    fontSize: '14px',
    color: '#848484',
  },
  experienceDescription: {
    fontSize: '14px',
    color: '#848484',
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: 'center',
    color: 'grey',
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
});

Font.register({
  family: 'Sora',
  src: 'https://fonts.gstatic.com/s/sora/v10/xMQOuFFYT72X5wkB_18qmnndmSfSmU-DKQc.ttf',
});