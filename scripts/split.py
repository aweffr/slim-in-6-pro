import subprocess
from pathlib import Path

data = []

with open('1-start-it-up.txt', 'r', encoding='utf-8') as f:
    for line in f:
        line = line.strip()
        ts = line[:5]
        title = line[6:]
        data.append([ts, title])


def get_mm_ss(s):
    # "28:33" -> (28, 33)
    mm, ss = s.split(':')
    return int(mm), int(ss)


def duration_mm_ss(mm1, ss1, mm2, ss2, extend=0):
    seconds = mm2 * 60 + ss2 - mm1 * 60 - ss1
    seconds = int(seconds + extend)
    return (seconds // 60), (seconds % 60)


work_dir: Path = Path(__file__).parent.parent / "videos"
out_dir = work_dir / "outputs"

if not out_dir.exists():
    out_dir.mkdir()

cmd = "ffmpeg -y -fflags +genpts -ss {start} -t {duration} -accurate_seek -i \"{in_file}\" -crf 26 -s 600x332 -avoid_negative_ts 1 \"{out_file}\""

for idx, ((ts1, title), (ts2, _)) in enumerate(zip(data, data[1:])):
    print(f'{idx} {ts1} - {ts2}: {title}')

    start = '00:' + ts1

    d_mm, d_ss = duration_mm_ss(*get_mm_ss(ts1), *get_mm_ss(ts2), extend=1)

    s = cmd.format(
        start=start,
        duration='00:%02d:%02d' % (d_mm, d_ss),
        in_file='1-start-it-up.avi',
        out_file=str(out_dir / f'{idx + 1}-{title}.mp4')
    )

    subprocess.call(s, shell=True, cwd=str(work_dir))
