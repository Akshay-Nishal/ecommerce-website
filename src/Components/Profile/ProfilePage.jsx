import ProfileForm from './ProfileForm';
import classes from './ProfileForm.module.css';

const ProfilePage = () => {
  return (
    <section className={classes.profile}>
      <h1>Your User Profile</h1>
      <ProfileForm />
    </section>
  );
};

export default ProfilePage;