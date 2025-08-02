import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";

export default function ProjectTabs() {
  return (
    <>
      <Tabs defaultValue="pc">
        <TabsList>
          <TabsTrigger value="pc">PC</TabsTrigger>
          <TabsTrigger value="mobile">Mobile</TabsTrigger>
        </TabsList>
        <TabsContent value="pc">

        </TabsContent>
        <TabsContent value="mobile">

        </TabsContent>
      </Tabs>
    </>
  );
}