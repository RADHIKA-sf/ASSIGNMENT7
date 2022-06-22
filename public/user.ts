enum Roletype {
    SUPERADMIN = 'SuperAdmin',
    ADMIN = 'Admin',
    SUBSCRIBER = 'Subscriber'
}

 class User{
  
    constructor(public Id: Number, public FirstName: String, public MiddleName: String, public LastName: String,
        public Email: String, public Phone: String, public Role: string, public Address: String) {
    
    }
    
}

export {User,Roletype};