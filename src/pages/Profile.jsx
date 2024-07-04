import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Profile = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Profile</h1>
      <Card>
        <CardHeader>
          <CardTitle>User Information</CardTitle>
        </CardHeader>
        <CardContent>
          <img src="/placeholder.svg" alt="placeholder" className="mx-auto object-cover w-24 h-24 rounded-full" />
          <p>Name: John Doe</p>
          <p>Email: john.doe@example.com</p>
          <Button>Edit Profile</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;