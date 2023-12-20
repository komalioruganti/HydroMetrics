import '../css/profile.css'
export default function Profile(){
    return(
        <>
            <div class="profile-page">
    <h2 class="profile-title">Profile</h2>
    <div class="profile-body">
        <form id="editForm">
            <label for="name">Name:</label>
            <input type="text" className="profile-input" id="name" name="name" value="John Doe" readonly/>
        
            <label for="email">Email:</label>
            <input type="email" id="email" className="profile-input" name="email" value="john.doe@example.com" readonly/>
        
            <label for="address">Address:</label>
            <input type="text" id="address" className="profile-input" name="address" value="123 Main St, Cityville" readonly/>
        
            <button type="button" onClick="enableEdit()">Edit Information</button>
            <button className = "save" type="submit">Save Changes</button>
          </form>
    </div>
</div>

        </>
    )
}