import styles from './Profile.module.css';
import { GrTrash } from "react-icons/gr";
import { FiUpload } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function ProfileSettings() {
  return (
    <div className={styles.profileContainer}>
      {/* Profile Header */}
      <div className={styles.profileHeader}>
        <img src="https://assets.dryicons.com/uploads/icon/svg/5609/00c2616e-3746-48be-ac80-a4b8add412b5.svg" className={styles.profilePicture} />
        <div>
          <h1 className={styles.profileName}>John Doe</h1>
          <p className={styles.profileEmail}>john.doe@example.com</p>
        </div>
      </div>
      <div className={styles.projectProfile}>
        <h1>Project Profile</h1>
        <p>Update your profile information in the sections below</p>
      </div>

      {/* Basic Information Section */}
      <div className={styles.profileSection}>
        <div className={styles.basicInfo}>
          <h1>Basic information</h1>
          <p>
            Update your name and e-mail in this section. Note: this information will be public to all your project
            colleagues and can be changed anytime.
          </p>
        </div>
        <div className={styles.profileGrid}>
          <div className={styles.profileContent}>
            <span>First Name</span><br />
            <input className={`${styles.inputName} inputName`} type="text" placeholder="First name" />
          </div>
          <div className={styles.profileContent}>
            <span>Last Name</span><br />
            <input className={`${styles.inputLname} inputLname`} type="text" placeholder="Last name" />
          </div>

          <div className="col-span-2 w-full">
            <span>Email</span>
            <input className={`${styles.inputEmail} inputEmail`} type="email" placeholder="E-mail" />
          </div>
        </div>
      </div>

      {/* Profile Picture Section */}
      <div className={styles.profileSection}>
        <div className={styles.profileInfo}>
          <h1>Profile picture</h1>
          <p>Update your profile picture. Supported files are JPG, PNG, WebP, and JPEG.</p>
        </div>
        <div className={styles.profilePictureSection}>
          <div className={styles.profileImg}>
            <img src="https://assets.dryicons.com/uploads/icon/svg/5609/00c2616e-3746-48be-ac80-a4b8add412b5.svg" alt="Profile Preview" className={styles.profilePicturePreview} />
          </div>
          <div className={styles.uploadSection}>
            <span className={styles.addImg}>Add new profile picture</span>
            <div className={styles.fileNameContainer}>
              <p className={styles.fileNameText}></p>
              <button className={styles.deleteIcon} aria-label="Remove file">
              <GrTrash size={20} color="black" />
              </button>
            </div>
            <div className={styles.newFile}></div>
            <div className={styles.uploadArea}>
              <FiUpload size={24} />
              <p>Drop here to attach or <span className={styles.uploadLink}>upload</span></p>
              <h6>Max size: 5GB</h6>
            </div>
          </div>
        </div>
      </div>

      {/* Communication Section */}
      <div className={styles.profileSection}>
        <div className={styles.profileCommunication}>
          <h1>Communication</h1>
          <p>
          Update your e-mail communication preferences anytime. Choose to receive project notifications or disable them completely.
          </p>
        </div>
        <div className={styles.checkboxSection}>
          <div className={styles.optionsContainer}>
            <div className={styles.option}>
              <div className={styles.buttonTitle}>
                <button className={styles.checkboxButton}></button>
                <span>New Task</span>
              </div>
              <div className={styles.optionDescription}>
              Receive an e-mail alert each time a new task is assigned to me in a project.
              </div>
            </div>
            <div className={styles.option}>
              <div className={styles.buttonTitle}>
                <button className={styles.checkboxButton}></button>
                <span>New team members</span>
              </div>
              <div className={styles.optionDescription}>
              Receive an e-mail alert each time a team members enters in a project I’m assigned to.
              </div>
            </div>
            <div className={styles.option}>
              <div className={styles.buttonTitle}>
                <button className={styles.checkboxButton}></button>
                <span>Weekly reports</span>
              </div>
              <div className={styles.optionDescription}>
               Receive a weekly e-mail with a basic report, including estimated time and most active members.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social Information Section */}
      <div className={styles.profileSection}>
        <div className={styles.profileSocial}>
          <h1>Social information</h1>
          <p>Update your e-mail communication preferences anytime. Choose to receive project notifications or disable them completely.</p>
        </div>

        <div className={styles.socialContainer}>
          {/* Twitter/X Option */}
          <div className={styles.socialOption}>
            <label>Twitter/X</label>
            <div className={styles.inputRow}>
              <input type="text" className={styles.urlInput} value="https://x.com/" readOnly />
              <input type="text" placeholder="TheJohnDoe" />
            </div>
          </div>

          {/* Instagram Option */}
          <div className={styles.socialOption}>
            <label>Instagram</label>
            <div className={styles.inputRow}>
              <input type="text" className={styles.urlInput} value="https://instagram.com/" readOnly />
              <input type="text" placeholder="TheJohnDoe" />
            </div>
          </div>

          {/* LinkedIn Option */}
          <div className={styles.socialOption}>
            <label>Linkedin</label>
            <div className={styles.inputRow}>
              <input type="text" className={styles.urlInput} value="https://linkedin.com/" readOnly />
              <input type="text" placeholder="TheJohnDoe" />
            </div>
          </div>
        </div>
      </div>

      {/* Update Button */}
      <div className={styles.buttonUpdate}>
        <button className={styles.updateButton}>Update information</button>
        <p className={styles.backLink}>Never mind, take me <Link to="/kanban">back to my project</Link>.</p>
      </div>
    </div>
  );
}