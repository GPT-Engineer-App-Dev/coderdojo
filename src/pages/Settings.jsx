import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Settings = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Settings</h1>
      <Card>
        <CardHeader>
          <CardTitle>Settings Option 1</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Settings description goes here.</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Settings Option 2</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Settings description goes here.</p>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Settings Option 3</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Settings description goes here.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Settings;