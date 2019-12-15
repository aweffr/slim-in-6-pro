import subprocess

data = []

with open('slim in 6 - start it up.txt', 'r', encoding='utf-8') as f:
    for line in f:
        line = line.strip()
        ts = line[:5]
        title = line[6:]
        data.append([ts, title])


def get_mm_ss(s):
    # "28:33" -> (28, 33)
    mm, ss = s.split(':')
    return int(mm), int(ss)


def duration_mm_ss(mm1, ss1, mm2, ss2):
    seconds = mm2 * 60 + ss2 - mm1 * 60 - ss1
    return (seconds // 60), (seconds % 60)


cmd = "ffmpeg -fflags +genpts -ss {start} -t {duration} -accurate_seek -i \"{in_file}\" -codec copy  -avoid_negative_ts 1 \"1-start\{title}.avi\""


for idx, ((ts1, title), (ts2, _)) in enumerate(zip(data, data[1:])):
    print(f'{idx} {ts1} - {ts2}: {title}')

    start = '00:' + ts1

    d_mm, d_ss = duration_mm_ss(*get_mm_ss(ts1), *get_mm_ss(ts2))

    s = cmd.format(
        start=start,
        duration='00:%02d:%02d' % (d_mm, d_ss),
        in_file='Debbie Siebers - New Slim in 6 - Start It Up (35 min).avi',
        title=f'{idx+1}-{title}'
    )

    subprocess.call(s, shell=True)
