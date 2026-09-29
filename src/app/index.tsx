import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';

const tileColors = {
    one: '#1E7AF4',
    two: '#F63F3E',
    three: '#FFD51A',
    four: '#25AE67',
    five: '#8938E5',
    six: '#FF7411',
};

export default function HomeScreen() {
    const { height } = useWindowDimensions();

    return (
        <View style={styles.screen}>
            <StatusBar hidden />
            <View style={[styles.grid, { marginTop: height * 0.02 }]}>
                <View style={[styles.row, { height: height * 0.204, marginBottom: height * 0.011 }]}>
                    <Tile number="1" color={tileColors.one} />
                    <Tile number="2" color={tileColors.two} />
                </View>

                <View style={[styles.row, { height: height * 0.198, marginBottom: height * 0.011 }]}>
                    <View style={{ flex: 0.75 }}>
                        <Tile number="3" color={tileColors.three} textColor="#090909" />
                    </View>

                    <View style={{ flex: 0.75 }}>
                        <Tile number="4" color={tileColors.four} />
                    </View>

                    <View style={{ flex: 1.5 }}>
                        <Tile number="5" color={tileColors.five} />
                    </View>
                </View>

                <View style={[styles.row, { height: height * 0.173 }]}>
                    <Tile number="6" color={tileColors.six} />
                </View>
            </View>

            <Text style={[styles.footer, { bottom: height * 0.037 }]}>Nguyễn Đức Hiếu - BIT240092</Text>
        </View>
    );
}

type TileProps = {
    number: string;
    color: string;
    textColor?: string;
};

function Tile({ number, color, textColor = '#FFFFFF' }: TileProps) {
    return (
        <View style={[styles.tile, { backgroundColor: color }]}>
            <Text style={[styles.tileLabel, { color: textColor }]}>{number}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    grid: {
        marginHorizontal: '4%',
    },
    row: {
        flexDirection: 'row',
        gap: 7,
    },
    tile: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tileLabel: {
        fontSize: 44,
        fontWeight: '700',
        lineHeight: 52,
        textAlign: 'center',
    },
    footer: {
        position: 'absolute',
        alignSelf: 'center',
        color: '#555555',
        fontSize: 15,
        fontWeight: '600',
        lineHeight: 18,
    },
});