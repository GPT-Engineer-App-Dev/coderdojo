import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";

const fetchProfile = async () => {
  const response = await fetch("/api/profile");
  if (!response.ok) {
    throw new Error("Failed to fetch profile");
  }
  return response.json();
};

const Profile = () => {
  const { data: profile, error, isLoading } = useQuery({
    queryKey: ["profile"],
    queryFn: fetchProfile,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading profile</div>;

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Profile</h1>
      <Card>
        <CardHeader>
          <CardTitle>User Information</CardTitle>
        </CardHeader>
        <CardContent>
          <img src={profile.avatar} alt="User Avatar" className="mx-auto object-cover w-24 h-24 rounded-full" />
          <p>Name: {profile.name}</p>
          <p>Email: {profile.email}</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Enrolled Courses</CardTitle>
        </CardHeader>
        <CardContent>
          {profile.enrolledCourses.length > 0 ? (
            <ul>
              {profile.enrolledCourses.map((course) => (
                <li key={course.id}>{course.title}</li>
              ))}
            </ul>
          ) : (
            <p>No enrolled courses</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;