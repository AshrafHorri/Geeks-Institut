class Song:
    def __init__(self, lyrics):
        self.lyrics = lyrics
    def sing_me_a_song(self):
        print("\n--- Singing the song ---")
        for line in self.lyrics:
            print(line)
        print("------------------------")
stairway_lyrics = ["There’s a lady who's sure", "all that glitters is gold", "and she’s buying a stairway to heaven"]
stairway = Song(stairway_lyrics)
stairway.sing_me_a_song()
bohemian_rhapsody_lyrics = ["Is this the real life?", "Is this just fantasy?", "Caught in a landslide,", "No escape from reality"]
bohemian_rhapsody = Song(bohemian_rhapsody_lyrics)
bohemian_rhapsody.sing_me_a_song()
