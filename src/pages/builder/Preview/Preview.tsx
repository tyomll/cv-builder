import React, { FC } from 'react';
import { Document, Page, Text, PDFViewer, View } from '@react-pdf/renderer';
import { styles } from './styles';
import s from '../Builder.module.scss';

interface IPreview {
  details: any;
}
const Preview: FC<IPreview> = ({ details }) => {
  return (
    <div className={s.document}>
      <PDFViewer style={styles.iframe} showToolbar={false}>
        <Document>
          <Page style={styles.body}>
            <Text style={styles.title}>{details.firstName + ' ' + details.lastName}</Text>
            <Text style={styles.profession}>{details.profession}</Text>
            <View style={styles.mainInfo}>
              <View style={styles.profile}>
                <Text style={styles.mainInfoHeading}>MY PROFILE</Text>
                <Text>{details.about}</Text>
              </View>
              <View style={styles.education}>
                <Text style={styles.mainInfoHeading}>EDUCATION</Text>
                <Text>
                  {`2019 - 2023 • Dundee University AB Multimedia Arts
            2023 - 2024 • Dundee University Certificate course in graphic design and illustration
            `}
                </Text>
              </View>
            </View>
            <View style={styles.experience}>
              <Text style={styles.mainInfoHeading}>Experience</Text>
              <View style={styles.experienceBlock}>
                <Text>2023</Text>
                <View style={styles.experienceDetails}>
                  <Text>Resumize Company</Text>
                  <Text style={styles.experienceRole}>Junior Graphic Designer</Text>
                  <View style={styles.experienceDescription}>
                    <Text>• Tasked to make interactive user interfaces.</Text>
                    <Text>• Creating editable cv templates</Text>
                    <Text>• Organization offiles.</Text>
                  </View>
                </View>
              </View>
              <View style={styles.experienceBlock}>
                <Text>2025</Text>
                <View style={styles.experienceDetails}>
                  <Text>Resumize Company</Text>
                  <Text style={styles.experienceRole}>Front-End Developer</Text>
                  <View style={styles.experienceDescription}>
                    <Text>• Tasked to make interactive user interfaces.</Text>
                    <Text>• Creating editable cv templates</Text>
                    <Text>• Organization offiles.</Text>
                  </View>
                </View>
              </View>
              {/* <View style={styles.experienceBlock}>
          {education &&
            education.map((item: any, i: number) => {
              return <Text key={i}>{item.date}</Text>;
            })}
        </View> */}
            </View>
          </Page>
        </Document>
      </PDFViewer>
    </div>
  );
};

export default Preview;
