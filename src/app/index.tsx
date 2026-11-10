import { Pressable, Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-slate-100 px-6">
      <View className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-md border border-slate-200 items-center">
        <Text className="text-2xl font-bold text-slate-800 mb-2">Tailwind is Working! 🎉</Text>
        <Text className="text-sm text-slate-500 text-center mb-6">
          NativeWind utility classes are configured and active across your app.
        </Text>

        <Link href="/contact" asChild>
          <Pressable className="w-full py-3 px-4 bg-indigo-600 rounded-xl items-center active:bg-indigo-700">
            <Text className="text-white font-semibold text-center">Go to Contact Screen</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}


