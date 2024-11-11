import React from "react";
import styles from "./ProfileAct.module.css";
import { GrTrash } from "react-icons/gr";
import { Link } from 'react-router-dom';

const ProfileAct: React.FC = () => {
  return (

    <div className={styles.profileContainer}>
      {/* Header Section */}
      <div className={styles.desktopLeft}>
        <div className={styles.profileHeader}>
          <img src="https://assets.dryicons.com/uploads/icon/svg/5609/00c2616e-3746-48be-ac80-a4b8add412b5.svg"
            className={styles.profilePicture}/>
          <div>
            <h1 className={styles.profileName}>John Doe</h1>
            <p className={styles.username}>@johnDoe</p>
          </div>
        </div>
      
        {/* Profile Data Section */}
        <div className={styles.profileData}>
          <h1>Profile data</h1>
          <p>John Doe Information</p>
        </div>
          <div className={styles.profileSection}>
          {/* Contact Section */}
            <div className={styles.profileContent}>
              <div className={styles.sectionLine}></div>
              <h1>Contact</h1>
              <div className={styles.contactInfo}>
                <table className={styles.userTable}>
                  <tbody>
                    <tr className={styles.userRow}>
                      <td className={styles.social}>E-mail</td>
                      <td className={styles.socialURL}>jhondoe@example.com</td>
                    </tr>
                    <tr className={styles.userRow}>
                      <td className={styles.social}>Twitter/X</td>
                      <td className={styles.socialURL}>the@JhonDoe</td>
                    </tr>
                    <tr className={styles.userRow}>
                      <td className={styles.social}>Instagram</td>
                      <td className={styles.socialURL}>the@JhonDoe</td>
                    </tr>
                    <tr className={styles.userRow}>
                      <td className={styles.social}>Linkedin</td>
                      <td className={styles.socialURL}>the@JhonDoe</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
        
            {/* Details Section */}
            <div className={styles.profileContent}>
              <h1>Details</h1>
              <div className={styles.userDetails}>
                <table className={styles.userTable}>
                  <tbody>
                    <tr className={styles.userRow}>
                      <td className={styles.social}>User ID</td>
                      <td className={styles.socialURL}>000000000001</td>
                    </tr>
                    <tr className={styles.userRow}>
                      <td className={styles.social}>Creation Date</td>
                      <td className={styles.socialURL}>10/20/2024 09:00AM</td>
                    </tr>
                    <tr className={styles.userRow}>
                      <td className={styles.social}>Title</td>
                      <td className={styles.socialURL}>Project Manager</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
      </div>
      <div className={styles.desktopRight}>
          <div className={styles.profileSection}>
            {/*Activity Section*/}
            <div className={styles.profileContent}>
            <div className={styles.sectionLine}></div>
              <div className={styles.activityHeader}>
                <h1>Latest activity</h1>
                <p>Jhon Doe's last interactions</p>
              </div>
              <div className={styles.activityContent}>
                <img src="https://assets.dryicons.com/uploads/icon/svg/5609/00c2616e-3746-48be-ac80-a4b8add412b5.svg" className={styles.activityPicture}/>
                <p className={styles.activityInfo}> <span className={styles.actHL}> John Doe </span> marked a task as done on <span className={styles.actHL}> Set 25, 2024</span> </p>
              </div>
              <div className={styles.activityContent}>
                <img src="https://assets.dryicons.com/uploads/icon/svg/5609/00c2616e-3746-48be-ac80-a4b8add412b5.svg" className={styles.activityPicture}/>
                <p className={styles.activityInfo}> <span className={styles.actHL}> John Doe </span> marked a task as done on <span className={styles.actHL}> Set 25, 2024</span> </p>
              </div>
              <div className={styles.activityContent}>
                <img src="https://assets.dryicons.com/uploads/icon/svg/5609/00c2616e-3746-48be-ac80-a4b8add412b5.svg" className={styles.activityPicture}/>
                <p className={styles.activityInfo}> <span className={styles.actHL}> John Doe </span> marked a task as done on <span className={styles.actHL}> Set 25, 2024</span> </p>
              </div>
              <div className={styles.activityContent}>
                <img src="https://assets.dryicons.com/uploads/icon/svg/5609/00c2616e-3746-48be-ac80-a4b8add412b5.svg" className={styles.activityPicture}/>
                <p className={styles.activityInfo}> <span className={styles.actHL}> John Doe </span> marked a task as done on <span className={styles.actHL}> Set 25, 2024</span> </p>
              </div>
              <div className={styles.activityContent}>
                <img src="https://assets.dryicons.com/uploads/icon/svg/5609/00c2616e-3746-48be-ac80-a4b8add412b5.svg" className={styles.activityPicture}/>
                <p className={styles.activityInfo}> <span className={styles.actHL}> John Doe </span> marked a task as done on <span className={styles.actHL}> Set 25, 2024</span> </p>
              </div>
              <div className={styles.activityContent}>
                <img src="https://assets.dryicons.com/uploads/icon/svg/5609/00c2616e-3746-48be-ac80-a4b8add412b5.svg" className={styles.activityPicture}/>
                <p className={styles.activityInfo}> <span className={styles.actHL}> John Doe </span> marked a task as done on <span className={styles.actHL}> Set 25, 2024</span> </p>
              </div>
              <div className={styles.activityContent}>
                <img src="https://assets.dryicons.com/uploads/icon/svg/5609/00c2616e-3746-48be-ac80-a4b8add412b5.svg" className={styles.activityPicture}/>
                <p className={styles.activityInfo}> <span className={styles.actHL}> John Doe </span> marked a task as done on <span className={styles.actHL}> Set 25, 2024</span> </p>
              </div>
            </div>

            {/*Report Section*/}
            <div className={styles.profileContent}>
              <div className={styles.reportHeader}>
                <h1>Weekly report</h1>
                <p>Tasks estimate</p>
              </div>
              <div className={styles.reportContent}>
                <div className={styles.tasks}>
                  <span>Total tasks assigned</span>
                  <p>30</p>
                </div>
                <div className={styles.tasks}>
                  <span>Average work time</span>
                  <p>15h 25min</p>
                </div>
              </div>
            </div>
        </div>
      </div>
  </div>  
);
};

export default ProfileAct;
