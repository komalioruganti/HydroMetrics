import '../css/settings.css'
export default function Settings() {
  return (
    <>
      <div className="settings-page">
        <h2 className="settings-title">Settings</h2>
        <div className="settings-body">
          {/* <div className="settings-section">
            <h3 class="settings-h3">General Settings</h3>
            <label for="theme">Theme:</label>
            <select id="theme">
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </div>
          Notification Settings
          <div className="settings-section">
            <h3 class="settings-h3">Notification Settings</h3>
            <label for="notifications">Receive Notifications:</label>
            <input type="checkbox" id="notifications" checked />
          </div> */}
          <h3 class="settings-h3">Account Settings</h3>
          <div className="settings-section">
            <h2 className= "change-password" >Change Password:</h2>
          </div>
          <div className="change-password-section" id="change-password-section">
            <label for="new-password">New Password:</label>
            <input 
              className="settings-input"
              type="password"
              id="new-password"
              placeholder="Enter new password"
            />

            <label for="confirm-password">Confirm Password:</label>
            <input
              className="settings-input"
              type="password"
              id="confirm-password"
              placeholder="Confirm new password"
            />

            <button id="update-password">Update Password</button>
          </div>
        </div>
      </div>
    </>
  );
}
