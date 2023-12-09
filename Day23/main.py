        def read_input(file_name):
            with open(file_name, 'r') as file:
                return [line.strip() for line in file.readlines()]

        def part_one(input_data):
            # Part one code here
            pass

        def part_two(input_data):
            # Part two code here
            pass

        if __name__ == "__main__":
            input_data = read_input('input.txt')
            print(f'Part One: {part_one(input_data)}')
            print(f'Part Two: {part_two(input_data)}')
