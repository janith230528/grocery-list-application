import { Pressable, Text, View } from "react-native";
import { Link } from "expo-router";

export default function ContactScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-slate-100 px-6">
      <View className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-md border border-slate-200 items-center">
        <Text className="text-2xl font-bold text-slate-800 mb-2">Contact Screen</Text>
        <Text className="text-sm text-slate-500 text-center mb-6">
          This screen also uses Tailwind utility classes.
        </Text>

        <Link href="/" asChild>
          <Pressable className="w-full py-3 px-4 bg-slate-800 rounded-xl items-center active:bg-slate-900">
            <Text className="text-white font-semibold text-center">Back to Home</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}

